import { mutationField, nonNull } from 'nexus'

export const FinancialRecordTypeDeleteManyMutation = mutationField(
  'deleteManyFinancialRecordType',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'FinancialRecordTypeWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.financialRecordType.deleteMany({ where } as any)
    },
  },
)
