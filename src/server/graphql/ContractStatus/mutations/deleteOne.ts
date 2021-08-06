import { mutationField, nonNull } from 'nexus'

export const ContractStatusDeleteOneMutation = mutationField(
  'deleteOneContractStatus',
  {
    type: 'ContractStatus',
    args: {
      where: nonNull('ContractStatusWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.contractStatus.delete({
        where,
        ...select,
      })
    },
  },
)
