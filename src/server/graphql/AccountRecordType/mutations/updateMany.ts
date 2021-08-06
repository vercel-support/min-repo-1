import { mutationField, nonNull } from 'nexus'

export const AccountRecordTypeUpdateManyMutation = mutationField(
  'updateManyAccountRecordType',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'AccountRecordTypeWhereInput',
      data: nonNull('AccountRecordTypeUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.accountRecordType.updateMany(args as any)
    },
  },
)
