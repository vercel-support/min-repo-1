import { mutationField, nonNull } from 'nexus'

export const ContactRecordTypeUpdateManyMutation = mutationField(
  'updateManyContactRecordType',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ContactRecordTypeWhereInput',
      data: nonNull('ContactRecordTypeUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.contactRecordType.updateMany(args as any)
    },
  },
)
