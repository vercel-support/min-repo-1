import { mutationField, nonNull } from 'nexus'

export const AssetsAndLiabilitiesUpdateManyMutation = mutationField(
  'updateManyAssetsAndLiabilities',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'AssetsAndLiabilitiesWhereInput',
      data: nonNull('AssetsAndLiabilitiesUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.assetsAndLiabilities.updateMany(args as any)
    },
  },
)
