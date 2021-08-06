import { mutationField, nonNull } from 'nexus'

export const ContractStatusUpdateOneMutation = mutationField(
  'updateOneContractStatus',
  {
    type: nonNull('ContractStatus'),
    args: {
      where: nonNull('ContractStatusWhereUniqueInput'),
      data: nonNull('ContractStatusUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.contractStatus.update({
        where,
        data,
        ...select,
      })
    },
  },
)
