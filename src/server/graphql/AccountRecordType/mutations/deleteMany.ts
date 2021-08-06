import { mutationField, nonNull } from 'nexus'

export const AccountRecordTypeDeleteManyMutation = mutationField(
  'deleteManyAccountRecordType',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'AccountRecordTypeWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.accountRecordType.deleteMany({ where } as any)
    },
  },
)
