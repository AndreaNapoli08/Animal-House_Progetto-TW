import { Document, Schema, model, ObjectId } from 'mongoose'
import date from 'date-and-time'

interface IMessage {
	author: ObjectId
	content: string
}

interface IThread extends Document {
	title: string
	creator: ObjectId
	creatorUsername: string
	messages: IMessage[]
}

const messageSchema = new Schema({
	author: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	},
	content: {
		type: String,
		required: true
	}
}, { timestamps: true })

const threadSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	creator: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	},
	messages: {
		type: [messageSchema],
		default: []
	}
}, {
	timestamps: true,
	toJSON: {
		transform(doc, ret) {
			ret = {
				"id": doc._id,
				"title": doc.title,
				"creatorId": doc.creator._id,
				"creatorUsername": doc.creator?.username || "[utente eliminato]",
				"createdAt": date.format(doc.createdAt, "DD-MM-YYYY"),
				"messages": doc.messages.map((message: any) => ({
					authorId: message.author._id,
					authorUsername: message.author?.username || "[utente eliminato]",
					content: message.content,
					createdAt: date.format(message.createdAt, "DD-MM-YYYY HH:mm") 
				})),
			}

			return ret
		},
	}
})



export const ThreadModel = model<IThread>('Thread', threadSchema)

export type { IThread }