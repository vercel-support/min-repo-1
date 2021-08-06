import { mutationField, nonNull } from 'nexus'

export const CampaignStatusUpdateManyMutation = mutationField(
  'updateManyCampaignStatus',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'CampaignStatusWhereInput',
      data: nonNull('CampaignStatusUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.campaignStatus.updateMany(args as any)
    },
  },
)
