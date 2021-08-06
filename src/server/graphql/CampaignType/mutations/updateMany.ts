import { mutationField, nonNull } from 'nexus'

export const CampaignTypeUpdateManyMutation = mutationField(
  'updateManyCampaignType',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'CampaignTypeWhereInput',
      data: nonNull('CampaignTypeUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.campaignType.updateMany(args as any)
    },
  },
)
