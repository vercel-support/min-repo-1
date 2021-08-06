import { mutationField, nonNull } from 'nexus'

export const FinancialRecordTypeDeleteOneMutation = mutationField(
  'deleteOneFinancialRecordType',
  {
    type: 'FinancialRecordType',
    args: {
      where: nonNull('FinancialRecordTypeWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.financialRecordType.delete({
        where,
        ...select,
      })
    },
  },
)
