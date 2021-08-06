import { mutationField, nonNull } from 'nexus'

export const ContractStatusUpsertOneMutation = mutationField(
  'upsertOneContractStatus',
  {
    type: nonNull('ContractStatus'),
    args: {
      where: nonNull('ContractStatusWhereUniqueInput'),
      create: nonNull('ContractStatusCreateInput'),
      update: nonNull('ContractStatusUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.contractStatus.upsert({
        ...args,
        ...select,
      })
    },
  },
)
