import { mutationField, nonNull } from 'nexus'

export const ContractStatusCreateOneMutation = mutationField(
  'createOneContractStatus',
  {
    type: nonNull('ContractStatus'),
    args: {
      data: nonNull('ContractStatusCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.contractStatus.create({
        data,
        ...select,
      })
    },
  },
)
