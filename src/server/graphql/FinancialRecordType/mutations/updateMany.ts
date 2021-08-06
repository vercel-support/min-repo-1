import { mutationField, nonNull } from 'nexus'

export const FinancialRecordTypeUpdateManyMutation = mutationField(
  'updateManyFinancialRecordType',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'FinancialRecordTypeWhereInput',
      data: nonNull('FinancialRecordTypeUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.financialRecordType.updateMany(args as any)
    },
  },
)
